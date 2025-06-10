from fastapi import APIRouter, Request
from services.ai_service import get_ai_response
import json

router = APIRouter()

# Load FAQs from file
with open("data/faq_data.json", "r") as f:
    faq_data = json.load(f)

def search_faq(question: str):
    for item in faq_data:
        if item["question"].lower() in question.lower():
            return item["answer"]
    return None

@router.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_input = data.get("message", "")

    answer = search_faq(user_input)
    if answer:
        return {"response": answer}
    
    # Else, get AI response
    ai_reply = get_ai_response(user_input)
    return {"response": ai_reply}
