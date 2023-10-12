import cv2
import dlib
import mysql.connector

# Inicializa o detector de rosto do OpenCV
face_cascade = cv2.CascadeClassifier('caminho_para_o_classificador_haar.xml')

# Inicializa o detector de pontos faciais do dlib
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')

# Inicializa o reconhecedor facial do dlib
face_recognizer = dlib.face_recognition_model_v1('dlib_face_recognition_resnet_model_v1.dat')

# Carrega uma imagem de teste
imagem = cv2.imread('caminho_para_a_imagem_de_teste.jpg')

# Converte a imagem para tons de cinza
imagem_gray = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)

# Detecta rostos na imagem usando o classificador Haar
faces = face_cascade.detectMultiScale(imagem_gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# Inicializa a conexão com o banco de dados MySQL
conexao = mysql.connector.connect(
    host='hostname',
    user='username',
    password='password',
    database='database_name'
)

# Crie um cursor para executar consultas SQL
cursor = conexao.cursor()

# Loop sobre os rostos detectados
for (x, y, w, h) in faces:
    # Obtém os pontos faciais do rosto
    shape = predictor(imagem_gray, dlib.rectangle(x, y, x+w, y+h))
    
    # Converte os pontos faciais em um vetor de características
    face_descriptor = face_recognizer.compute_face_descriptor(imagem, shape)
    
    # Converte o vetor de características em uma string para armazenamento no banco de dados
    face_descriptor_str = ','.join(map(str, face_descriptor))
    
    # Insira os dados no banco de dados
    nome = 'Nome_da_pessoa'  # Substitua pelo nome da pessoa
    sql = "INSERT INTO reconhecimento_facial (nome, vetor_caracteristicas) VALUES (%s, %s)"
    val = (nome, face_descriptor_str)
    cursor.execute(sql, val)
    conexao.commit()

# Feche o cursor e a conexão
cursor.close()
conexao.close()
