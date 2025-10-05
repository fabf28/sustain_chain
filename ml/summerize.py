import os
import google.generativeai as genai

#import env variables
GEMINI_KEY = os.getenv("GEMINI_KEY")

# Configure your key
genai.configure(api_key=GEMINI_KEY)

# Create a model instance
model = genai.GenerativeModel("gemini-1.5-flash")  # or "gemini-1.5-pro"


def responseText():
    prompt = "Write a haiku about data science."

    # Send a prompt
    response = model.generate_content(prompt)
    print(response.text)
    return response.text

def responseChart():
    prompt = "Write a haiku about data science."

    # Send a prompt
    response = model.generate_content(prompt)
    print(response.text)
    return response.text


responseChart()
