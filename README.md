
This repository was created in response to a technical assignment from Assurity.

## Prerequisites

To enable auto performance testing for JMeter, we can use Taurus which gives us pass/fail criteria.
Install `Taurus` locally -> Following the installation directions here: https://gettaurus.org/install/Installation/

Ensure both docker and docker-compose are installed

Ensure jmeter is installed, and that the path `apache-jmeter-5.5\bin` has been added to local environment variables

For dashboarding, git clone the Grafana/InfluxDB docker based solution shown here:
https://github.com/testsmith-io/jmeter-influxdb-grafana-docker

Follow the directions to run the monitoring solution on local host


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

One way of viewing the test results is to navigate to the logs folder in the root of the solution and open `index.html`


You can also view the Grafana Dashboard using this url: http://localhost:3000/?orgId=1

Once Grafana opens, click `Browse Dashboards` and select `JMeter Dashboard`

`Note:` A listener has been configured in the jmx script which sends the JMeter performance data to the local Grafana instance


In order to run for continuos integration, run the following command which fails the test automatically if the P90 response time is greater than 500ms
```bash
bzt taurus-run.yml passfail.yml
```