import torch
from PIL import Image
import sys
import json

model = torch.hub.load('./yolov5', 'custom', path='./static/best.pt', source='local' ,force_reload=True) 

img=Image.open('uploads/'+sys.argv[1]).convert("RGB")
results=model(img)
results_json = results.pandas().xyxy[0].to_json(orient="records");
print(results_json)