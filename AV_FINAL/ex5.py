#########################
#
# Data: Arlenson Lorran
#
# Data: 27/09/2024
#
#########################

# IMPORTAR BIBLIOTECAS

import time as t

# FUNÇÕES

def adicionar_tarefa(lista_tarefas):
    descrições = input('Digite a descrição da tarefa: ')
    while True:
        prioridades = input('Digite a prioridade da tarefa (alta/média/baixa): ').lower()
        if prioridades in ['alta', 'média', 'baixa']:
            break
        else:
            print('Prioridade invalida')
    lista_tarefas.append({'descrição': descrições, 'prioridade': prioridades})
def exibir_tarefas(lista_tarefas):
    for i, l_tarefa in enumerate(lista_tarefas):
        print(f'[{i+1}] - Descrição: {l_tarefa['descrição']} - Prioridade: {l_tarefa['prioridade']}')
def concluir_tarefa(lista_tarefas):
    id = int(input('Digite o número da tarefa que deseja concluir: '))
    if 1 <= id <= len(lista_tarefas):
        lista_tarefas.pop(id-1)
        print('Tarefa concluida e removida da lista!')
    else:
        print('ID invalido')

# OPERANDOS

descrições = ''
prioridades = ''
lista_tarefas = []
opcao = 0

# ENTRADA

print('=================== GERENCIADOR DE TAREFAS ==================')
while True:
    print('Escolha uma opção:')
    print('1 - Adicionar tarefa.')
    print('2 - Exibir tarefas.')
    print('3 - Concluir tarefa.')
    print('4- Sair.')
    opcao = int(input('Opção: '))
    t.sleep(1)

# PROCESSAMENTO

    if opcao == 1:
        adicionar_tarefa(lista_tarefas)
    elif opcao == 2:
        exibir_tarefas(lista_tarefas)
    elif opcao == 3:
        concluir_tarefa(lista_tarefas)
    elif opcao == 4:
        break
    else:
        print('Opção invalida.')

# SAIDA

print('Fim do programa!')