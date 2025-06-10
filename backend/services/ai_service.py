# import openai

# openai.api_key = "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"

# def get_ai_response(user_input: str) -> str:
#     try:
#         response = openai.ChatCompletion.create(
#             model="gpt-3.5-turbo",
#             messages=[{"role": "user", "content": user_input}]
#         )
#         return response.choices[0].message.content.strip()
#     except Exception as e:
#         return "Sorry, I couldn't process that at the moment."

def get_ai_response(user_query: str) -> str:
    return "Sorry, I didn't Understand, I Can Answer only Questions related to JAMIA HAMDARD UNIVERSITY."
