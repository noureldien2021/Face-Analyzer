## Emotion & Face Analyzer

## Table of Content
- [Solution Overview](#solution-overview)
- [Architecture Diagram](#architecture-diagram)
- [WorkFlow](#WorkFlow)
- [Learning Outcomes](#Learning-Outcomes)
- [Demo Link](#demo-link)
- [Contact / Support](#contact--support)

 




# Solution Overview

**Description**

A web-based application that allows users to upload a photo, analyze facial attributes, and detect emotions using AWS Rekognition. The app provides a detailed analysis of age, gender, smile, beard, and dominant emotions, and allows users to download a PDF report.


**Key AWS Services Used**

1. Amazon S3: Stores uploaded images for analysis.
2. AWS Lambda: Runs the face and emotion detection using AWS Rekognition API.
3. Amazon API Gateway: Provides a secure HTTP endpoint to trigger the Lambda function.
4. AWS Rekognition: Detects faces and analyzes attributes like age, gender, smile, beard, and emotions.



# Architecture Diagram

![Architecture Diagram](https://raw.githubusercontent.com/noureldien2021/Face-Analyzer/refs/heads/master/Emotion%20%26%20Face%20Analyzer.jpeg))


# WorkFlow
1. User uploads an image from the web interface to the S3 bucket.
2. User clicks Analyze, which triggers the API Gateway endpoint.
3. Lambda function receives the S3 image key and calls AWS Rekognition to analyze the face(s) and emotions.
4. Analysis results are returned to the web page and displayed in a table.
5. User can download the full analysis report as a PDF.

# Learning Outcomes
1. Learn how to build a serverless image analysis application using AWS Lambda and API Gateway.
2. Gain experience integrating Amazon S3 with a web interface for file uploads.
3. Understand how to use AWS Rekognition for facial and emotion detection.



# Demo Link

You can view the live demo of the Serverless Image Processing project here:  

<a href="https://drive.google.com/file/d/1hL2IYWyO8VBe94ezH_22tpzFdHMNshr/view?usp=drive_link">
  <img src="https://github.com/noureldien2021/Project--Serverless-Image-Processing-with-S3-and-Lambda/blob/main/demo2.jpg?raw=true" alt="Demo Video" width="70"/>
</a>


# Contact / Support

For any questions or support regarding this project, you can reach me at:

- **Email:** noureldiensami2021@gmail.com
- **LinkedIn:** [Noureldin Sami](https://www.linkedin.com/in/noureldien-sami/)
- **Website:** [Noureldin Sami](https://noureldien-sami2024.netlify.app/)  
- **GitHub Issues:** [Open an Issue](https://github.com/noureldien2021/Project-2-Serverless-Image-Processing-with-S3-and-Lambda/issues)
 
