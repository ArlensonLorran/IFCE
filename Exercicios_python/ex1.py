#########################
#
# Nome: Arlenson Lorran
#
# Data: 24/09/2024
#
#########################

# IMPORTAR BIBLIOTECAS

import time as t

# OPERANDOS

temp_s = []
temp = 0
temp_m = 0
inf_m = 0

# ENTRADA

print('========== TEMPERATURAS DIÁRIAS ==========\n')
for i in range(10):
    while True:
        temp = (int(input(f'Entre com a {i+1}º temperatura - ')))
        if 15 <= temp <= 40:
            temp_s.append(temp)
            break
        else:
            print('Erro, Tente novamente!')

# PROCESSAMENTO

temp_m = sum(temp_s) / len(temp_s)
for temp in temp_s:
    if temp < temp_m:
        inf_m += 1

# SAIDA

t.sleep(1)
print('\n============= Resultado =================\n')
print(f'Maior temperatura -: {max(temp_s)}°')
print(f'Menor temperatura -: {min(temp_s)}°')
print(f'Temperatura média -: {temp_m}°')
print(f'Dias com temperatura inferior a média -: {inf_m}')
