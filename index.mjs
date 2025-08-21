import { RekognitionClient, DetectFacesCommand } from "@aws-sdk/client-rekognition";

const client = new RekognitionClient({ region: "us-east-1" });

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const bucket = body.bucket;
    const key = body.key;

    const command = new DetectFacesCommand({
      Image: { S3Object: { Bucket: bucket, Name: key } },
      Attributes: ["ALL"]
    });

    const response = await client.send(command);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  // مهم عشان تقدر تطلبه من أي ويبسايت
      },
      body: JSON.stringify(response.FaceDetails, null, 2) // null,2 للتنسيق
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(response.FaceDetails, null, 2)
    };
  }
};
