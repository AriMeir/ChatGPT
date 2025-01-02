import OpenAI from "openai";
import dotenv from "dotenv";
import express from "express"
import cors from "cors";

const app = express()
const port = 3080
app.use(express.json());
app.use(cors());
dotenv.config();


const openai = new OpenAI({
    apiKey: `${process.env.OPENAI_API_KEY}`,
    organization: "org-wuWddHgQrsUC0cjkUAas2iN7",
    project: "proj_i50UrX7fc8CCokHe7wup9QYN",
});

app.post('/api', async (req, res) => {
    const {message} = req.body
    console.log(message)
    const completion = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: `this is the message of the user - ${message} respond kindly`,
        max_tokens: 4000,  // Increase this value to allow for a longer response
        stop: null  // Ensure no stop sequences are defined that might cut off the response
        });
        console.log(completion.choices[0].text)
    res.json({ message: completion.choices[0].text});
  });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });