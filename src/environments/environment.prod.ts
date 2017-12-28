const restEndPoint = "http://spring-socialapp.vrqb9j7jng.us-east-1.elasticbeanstalk.com";

export const environment = {
  production: true,
  apiLogin: restEndPoint+"/api/login",
  apiLoginFB: restEndPoint+"/signin/facebook",
  apiLoginTwitter: restEndPoint+"/signin/twitter",
  apiLoginLinkedin: restEndPoint+"/signin/linkedin",
  apiLoginGoogle:restEndPoint+"/signin/google",
  apiLogOut:restEndPoint+"/api/logout",
  apiAuth: restEndPoint+"/api/auth"
};