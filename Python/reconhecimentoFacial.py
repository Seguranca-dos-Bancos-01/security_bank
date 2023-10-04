import cv2
import dlib


face_cascade = cv2.CascadeClassifier('caminho_para_o_classificador_haar.xml')


predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')


face_recognizer = dlib.face_recognition_model_v1('dlib_face_recognition_resnet_model_v1.dat')

# Carrega uma imagem de teste
imagem = cv2.imread('caminho_para_a_imagem_de_teste.jpg')

# Converte a imagem para tons de cinza
imagem_gray = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)

# Detecta rostos na imagem usando o classificador Haar
faces = face_cascade.detectMultiScale(imagem_gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# Loop sobre os rostos detectados
for (x, y, w, h) in faces:
    # Desenha um retângulo ao redor do rosto
    cv2.rectangle(imagem, (x, y), (x+w, y+h), (0, 255, 0), 2)
    
    # Obtém os pontos faciais do rosto
    shape = predictor(imagem_gray, dlib.rectangle(x, y, x+w, y+h))
    
    # Converte os pontos faciais em um vetor de características
    face_descriptor = face_recognizer.compute_face_descriptor(imagem, shape)
    
    # Faça alguma coisa com o vetor de características (por exemplo, compare com outros vetores de características)

# Exibe a imagem com os rostos detectados
cv2.imshow('Reconhecimento Facial', imagem)
cv2.waitKey(0)
cv2.destroyAllWindows()
