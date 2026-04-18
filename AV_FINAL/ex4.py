#########################
#
# Data: Arlenson Lorran
#
# Data: 27/09/2024
#
#########################

# IMPORTAR BIBLIOTECAS

import random as r

# OPERANDOS

categoria = 0
animal_sorteado = ''
mamiferos_list = ['morcego', 'gato', 'vaca', 'hipopotamo']
aves_list = ['galinha', 'pinguim', 'flamingo', 'pelicano']
repteis_list = ['camaleão', 'lagartixa', 'cobra', 'tartaruga']    
peixes_list = ['tilapia', 'sardinha', 'tubarão', 'enguia']
anfibios_list = ['sapo', 'axolot', 'rãs', 'perereca']
animais_d = {
    'Mamíferos': mamiferos_list,
    'Aves': aves_list,
    'Répteis': repteis_list,
    'Peixes': peixes_list,
    'Anfíbios': anfibios_list
}
dick = ''
palpite = ''
list_palpites = []

# ENTRADA

print('===== JOGO DE ADIVINHAÇÃO DE PALAVRAS =====\n')
print('Escolha uma categoria de animais:')
print('1 - Mamiferos.')
print('2 - Aves.')
print('3 - Reptéis.')
print('4 - Peixes.')
print('5 - Anfibios.')
print('6 - Sair.')
categoria = int(input('Digite o número da categoria desejada: '))

# PROCESSAMENTO

while True:
    if categoria == 1:
        animal_sorteado = r.choice(mamiferos_list)
    elif categoria == 2:
        animal_sorteado = r.choice(aves_list)
    elif categoria == 3:
        animal_sorteado = r.choice(repteis_list)
    elif categoria == 4:
        animal_sorteado = r.choice(peixes_list)
    elif categoria == 5:
        animal_sorteado = r.choice(anfibios_list)
    elif categoria == 6:
        break
    else:
        print('Numero invalido.')
    while True:
        dick = len(animal_sorteado)
        print('--------------- Lets start ---------------')
        print(f'Dica: O animal tem {dick} letras.')
        palpite = input('Tente adivinhar a palavra ou digite (sair): ').lower()
        if palpite == animal_sorteado:
            list_palpites.append(palpite)
            print('Parabéns! Você acertou a palavra.')
            break
        elif palpite == 'sair':
            break
        else:
            list_palpites.append(palpite)
            print('Palpite incorreto.')
            print('Tente novamente.')
    break

# SAIDA

print('-'*40)
print(f'Número de palpites: {len(list_palpites)}')
print(f'Palpites realizados: {list_palpites}')
print(f'A Palavra correta era: {animal_sorteado}')