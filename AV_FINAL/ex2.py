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

bus = {
  1: 'disponivel',
  2: 'disponivel',
  3: 'disponivel',
  4: 'disponivel',
  5: 'disponivel',
}
assento = 0

# ENTRADA

print('======= SISTEMA DE RESERVA =======\n')
t.sleep(1)
while True:
  if bus == {}:
    break
  t.sleep(1)
  print(f'Assentos disponiveis - {list(bus.keys())} (0 para sair)\n')
  assento = int(input('Qual assento deseja reservar? '))
  if assento == 0:
    break
  print('-'*40)

# PROCESSAMENTO

  if assento not in bus:
    print(f'Desculpe, o assento {assento} já está reservado.\n')
    continue
  else:
    print(f'Assento {assento} reservado com sucesso!\n')
  del bus[assento]


# SAIDA

t.sleep(1)
print('Fim do programa!')