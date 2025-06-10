# from fastapi import APIRouter, Request
# from pydantic import BaseModel

# router = APIRouter()

# # ✅ Predefined FAQ responses
# faq_responses = {
#     "hi": "Hello! How can I assist you today?",
#     "hello": "Hi there! Ask me anything about your college.",
#     "hey": "Hey! I'm your assistant from Jamia Hamdard 😊",
#     "who are you": "I'm a student support chatbot for Jamia Hamdard University.",
#     "what can you do": "I can help you with exam dates, fees, results, and more.",
#     "when is the next exam": "The next exam schedule will be posted on the university portal.",
#     "when will the result be declared": "Results are usually declared within 2-3 weeks after exams.",
#     "is tomorrow a holiday": "Please check the university calendar or official notice for holidays.",
#     "how to pay fees": "You can pay your fees via the student portal under the 'Fee Payment' section.",
#     "where is the admission office": "The admission office is in the admin block near Gate No. 1.",
#     "i forgot my student portal password": "Click on 'Forgot Password' on the student portal to reset it.",
#     "how to contact hod": "You can email your HOD or visit their office during working hours.",
# }

# # ✅ Message schema
# class Message(BaseModel):
#     message: str

# # ✅ /chat route
# @router.post("/chat")
# async def chat(msg: Message):
#     user_message = msg.message.lower().strip()

#     # 🔍 Check for FAQ match
#     for key in faq_responses:
#         if key in user_message:
#             return {"response": faq_responses[key]}

#     # ❌ Fallback if no match found
#     return {"response": "Sorry, I couldn't process that at the moment."}

from fastapi import APIRouter
from pydantic import BaseModel
import json
import os

router = APIRouter()

# ✅ Load FAQ data from JSON
def load_faqs():
    path = os.path.join(os.path.dirname(__file__), "../faq_data.json")
    with open(path, "r") as file:
        return json.load(file)

faq_data = load_faqs()

# ✅ Message model
class Message(BaseModel):
    message: str

@router.post("/chat")
async def chat(msg: Message):
    user_input = msg.message.lower().strip()

    # 🔍 Search in faq_data
    for item in faq_data:
        if item["question"] in user_input:
            return {"response": item["answer"]}

    # ❌ Fallback
    return {"response": "Sorry, I couldn't find an answer to that right now."}
