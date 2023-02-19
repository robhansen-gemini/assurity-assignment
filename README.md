
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
jmeter -f -n -t C:\projects\assurity\assurity-assignment.jmx -l C:\projects\assurity\run.jtl -Jthreads=5 -Jrampup=5 -Jduration=60 -Jthroughput=10.0 -e -o C:\projects\assurity\logs
```

View Dashboard using this url:
```bash
http://localhost:3000/?orgId=1
```