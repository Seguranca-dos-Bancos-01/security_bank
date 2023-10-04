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
    
    # Converte o vetor de características em uma string para comparação
    face_descriptor_str = ','.join(map(str, face_descriptor))
    
    # Consulta SQL para buscar registros no banco de dados com características semelhantes
    sql = "SELECT nome, vetor_caracteristicas FROM reconhecimento_facial"
    cursor.execute(sql)
    
    # Recupera todos os resultados da consulta
    resultados = cursor.fetchall()
    
    # Loop para comparar vetores de características
    for resultado in resultados:
        nome, vetor_armazenado_str = resultado
        vetor_armazenado = list(map(float, vetor_armazenado_str.split(',')))
        
        # Aqui você pode implementar a lógica para comparar os vetores de características,
        # por exemplo, usando uma métrica de distância como a distância euclidiana.
        # Se a distância for menor que um limite, você pode considerar o rosto como reconhecido.
        # Lembre-se de implementar sua própria lógica de reconhecimento aqui.
        
        # Se o rosto for reconhecido, você pode imprimir o nome da pessoa
        if reconhecido:
            print(f"Rosto reconhecido como {nome}")
            
# Feche o cursor e a conexão
cursor.close()
conexao.close()
