
This repository was created in response to a technical assignment from Assurity.

## Prerequisites

Install `Taurus` -> https://gettaurus.org/install/Installation/

Ensure both docker and docker-compose are installed

Ensure jmeter installed, and that the path has been added to local environment variables

For dashboarding, use the Grafana/InfluxDB docker based solution shown here:
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

View Dashboard using this url: http://localhost:3000/?orgId=1

Once Grafana opens, click `Browse Dashboards` and select `JMeter Dashboard`
Can also view test results by navigating to logs folder and opening `index.html`