


import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const message = "I can't believe you did this to me"
const openai = new OpenAI({
    apiKey: `${process.env.OPENAI_API_KEY}`,
    organization: "org-wuWddHgQrsUC0cjkUAas2iN7",
    project: "proj_i50UrX7fc8CCokHe7wup9QYN",
});


  async function callApi() {
    const completion = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: `your name is Timothy, you are sassy gay queen. The person who is talking to you is Janet, you hate her  and this is her message to you - ${message} - give her a proper response`,
        max_tokens: 200,  // Increase this value to allow for a longer response
        stop: null  // Ensure no stop sequences are defined that might cut off the response
      });
      console.log(completion.choices[0].text) 
  }

callApi()