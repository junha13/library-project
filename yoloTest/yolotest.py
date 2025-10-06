from ultralytics import YOLO
# Ultralytics 패키지에서 yolo 클래스 가져오기
# yolo가 모델 로드, 추론, 학습을 전부 담당 (내부적으로는 pyTorch를 사용)

model = YOLO("yolov8n.pt")
# 사전학습된 yolov8n nano 가중치로 model 객체를 만드는 거임
# 더 정확히 하고싶으면 yolov8s/m/1/x.pt 도 사용 가능

results = model("c:/yolotest/images/bustest.jpg")
# 모델을 메서드처럼 사용하면 추론 실행
# 내부 동작은 
# 1. 이미지를 가져와 디코딩 
# 2. 모델 입력 크기(기본 640)으로 리사이즈 & 정규화
# 3. 네트워크 추론 -> 박스 / 클래스 / 점수 산출
# 4. NMS로 겹치는 박스 정리 
# // NMS는 비최대 억제로 격자마다 여러 박스를 예측하는데 하나의 객체에 대해 너무 많은 박스를 그려대니까 신뢰도가 가장 높은 박스를 고르는 거임

# 임계값도 설정 가능 model("", conf=, imgsz=)

print("탐지된 객체 수:", len(results[0].boxes))
# results[0]는 첫 이미지의 결과, .boxes는 탐지된 바운딩박스 모음
# len()으로 탐지 개수 출력, 각 박스에도 접근 가능

results[0].save("c:/yolotest/out.jpg")
