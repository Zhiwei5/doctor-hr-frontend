# Heart rate monitor
  It is a front end project using **Javascript**. The function of this project is that user input 
his/her email addresses and then click the button to fetch the heartrate data stored in the MangoDB database

![alt text](https://github.com/Zhiwei5/doctor-hr-frontend/blob/master/hr-frontend/src/images/1..png)
# Steps to run this website
1. RUN DOCKER
`docker run -v $PWD/db:/data/db -p 27017:27017 mongo`
2. Run the Flask API and install the requirement package for this API
`pip install -r requirements.txt`
`Python heartrate_databases.py`
3. Run the Javascript
`npm install`
`npm run start`



# Example result

![alt text](https://github.com/Zhiwei5/doctor-hr-frontend/blob/master/hr-frontend/src/images/2..png)
