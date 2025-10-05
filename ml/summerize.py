from openai import OpenAI
import os

AZURE_OPENAI_KEY        = os.getenv("AZURE_OPENAI_KEY")
AZURE_OPENAI_ENDPOINT   = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_DEPLOYMENT = os.getenv("AZURE_OPENAI_DEPLOYMENT")
AZURE_API_VERSION       = os.getenv("AZURE_API_VERSION")

client = OpenAI(api_key=AZURE_OPENAI_KEY)

def responseText():
    setup = "You are a helpful assistant."
    prompt = "Write a haiku about data science."

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": setup},
            {"role": "user", "content": prompt}
        ]
    )
    return response

def responseChart():
    setup = "You are a helpful assistant."
    prompt = "Write a haiku about data science."

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": setup},
            {"role": "user", "content": prompt}
        ]
    )
    return response
