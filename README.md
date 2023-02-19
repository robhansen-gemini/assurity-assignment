
This repository was created in response to a technical assignment from Assurity.

## Prerequisites

To enable auto performance testing for JMeter, we can use Taurus which gives us pass/fail criteria.
Install `Taurus` locally -> following the installation directions here: https://gettaurus.org/install/Installation/

Ensure both docker and docker-compose are installed

Ensure jmeter is installed, and that the path `apache-jmeter-5.5\bin` has been added to local environment variables

For dashboarding through a local instance of Grafana, clone this Grafana/InfluxDB docker based solution, and follow the guide to get running locally:
https://github.com/testsmith-io/jmeter-influxdb-grafana-docker


**Installation**

Clone the generated repository on your local machine:

```bash
git clone https://github.com/robhansen-gemini/assurity-assignment.git
```

**Running the test**

Navigate to the root directory where the project was cloned, and run this command:

```bash
jmeter -f -n -t assurity-assignment.jmx -l logs\run.jtl -Jthreads=5 -Jrampup=5 -Jduration=60 -Jthroughput=10.0 -e -o logs
```

The raw data used as input into the script is located in the root, named `cat_id.txt`

Once the test is complete, you can view the test results by navigating to the `logs` folder in the root of the solution and opening `index.html`


You can also view the results in the Grafana Dashboard using this url: http://localhost:3000/?orgId=1 and selecting the appropriate run (once Grafana opens, click `Browse Dashboards` and select `JMeter Dashboard`)

`Note:` A listener has been configured in the jmx script which sends the JMeter performance data to the local Grafana instance


In order to run for continuous integration, run the following command:
```bash
bzt taurus-run.yml passfail.yml
```

The pass/fail criteria fails the test automatically if there are failures in the script, or if the P90 response time is greater than 500ms

## Report


**General Observations**

Even though a constant throughput timer set the number of samples to 10 per minute, during a 1 minute test a total of 33 transactions were completed.
The throughput timer needs more time over which to average a constant 10 transactions per minute as specified in the brief.
There were 2 failed requests and this represents a 6.06 failure rate.

  ![](report/graph-1.png)

The graph shows a total of 5 vusers active on the system during the test.


**Errors**

The failures were caused by the assertion of the CanRelist value being false:

  ![](report/graph-2.png)


**Percentile Response Times**

Percentile response times for the GET Category Details API call are shown below:

  ![](report/graph-3.png)

For this particular run, the P90 value was measured to be 1103ms.


**Latencies from South Africa**

The reason the test failed NFR-04, which states that 90 percent of the times the API is expected to perform within 500ms, is because of the high latency that exists between South Africa and New Zealand (where the server is located).
Most of the time of the call is taken up by network latency, and this behaviour can easily be seen in the next 2 graphs:

  ![](report/graph-4.png)
  ![](report/graph-5.png)


Latency is defined as the time from just before sending the request to just after receiving the first part of the response, and provides an idea of network delay time.
Response time is the time from just before sending the request to just after receiving the last part of the response, and unlike latency includes server processing time. The graphs show that server processing time only adds a fraction of additional time to the request (<10ms).





