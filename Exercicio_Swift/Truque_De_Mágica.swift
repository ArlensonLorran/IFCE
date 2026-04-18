print("\n========= Truque de Mágica ==========\n")


// Declarando variáveis


let nypes: [String] = ["♠", "♥", "♦", "♣"]
var indexCartas: [String] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var deck: [String] = []
var sortCard1: String
var sortCard2: String
var sortCard3: String


// Funçōes


// Função para criar um baralho
func decky(nypes: [String], indexCartas: [String]) -> [String]{ 
    var deck: [String] = []
    for i in nypes{
        for j in indexCartas{
            deck.append("\(j)\(i)")
        }
    }
    return deck
}

// Função para embaralhar o baralho
func embaralha(deckO: [String]) -> [String]{
    var deckC = deckO
    var deckE: [String] = []
    for _ in 0..<deckC.count {
        let indexAleatorio = Int.random(in: 0..<deckC.count)
        deckE.append(deckC[indexAleatorio])
        deckC.remove(at: indexAleatorio)
    }
    return deckE
}

// Funçao para sortear uma carta do baralho
func sortCards(deck: [String]) -> ([String], String){
    let sortIndex = Int.random(in:0..<deck.count)
    var deckCopy = deck
    let sortCard = deckCopy.remove(at: sortIndex)
    return (deckCopy,sortCard)
}

// Função para dividir o baralho
func dividirPile(deck: [String], quantidade: Int) -> ([String], [String]) {
    var newDeck = deck
    let pile = newDeck.prefix(quantidade)
    newDeck.removeFirst(quantidade)
    return (newDeck, Array(pile))
}

// Função para somar as pilhas do baralho dividido
func somaPile(pile1: [String], pile2: [String], pile3: [String], pile4: [String]) -> [String]{
   var finalDeck: [String] = []
   finalDeck = pile1 + pile2 + pile3 + pile4
   return finalDeck
}

// Função para separar as cartas em ímpar e par
func separarImpPar(deck: [String]) -> [String]{
    var pilhaPar_impar_: [String] = []
        for i in 0..<deck.count{
            if i % 2 != 0 {
                pilhaPar_impar_.append(deck[i])
            }
        }
    return pilhaPar_impar_
}

// Função para separar as cartas pares das impares
func separarParImp(deck: [String]) -> [String]{
    var pilhaImpar_par_: [String] = []
        for i in 0..<deck.count{
            if i % 2 == 0 {
                pilhaImpar_par_.append(deck[i]) 
        }
    }
     return pilhaImpar_par_
}


// Saídas


print("Baralho:\n")
deck = decky(nypes: nypes, indexCartas: indexCartas) // Chamando a função decky() para criar o baralho
print(deck, "\n")

print("Baralho embaralhado:\n")
deck = embaralha(deckO: deck) // Chamando a função embaralha() para embaralhar o baralho
print(deck, "\n")

print("Vamos sortear/retirar 3 cartas!\n")
(deck,sortCard1) = sortCards(deck: deck) // Chamando a função sortCards() para sortear as três cartas
(deck,sortCard2) = sortCards(deck: deck)
(deck,sortCard3) = sortCards(deck: deck)

print("Primeira Carta sorteada: \(sortCard1)")
print("Segunda Carta sorteada: \(sortCard2)")
print("Terceira Carta sorteada: \(sortCard3)\n")

print("Baralho sem as 3 cartas sortidas:\n") // Baralho sem as três cartas
print(deck)

var (deckResto1, pile1) = dividirPile(deck: deck, quantidade: 9) // Chamando a função dividirPile() para dividir as pilhas em 9, 15, 15, 10
var (deckResto2, pile2) = dividirPile(deck: deckResto1, quantidade: 15)
var (deckResto3, pile3) = dividirPile(deck: deckResto2, quantidade: 15)
var pile4 = deckResto3 // 10 cartas restantes
print("Pilha 1 (9 cartas): \(pile1)\n")	// Exibindo as pilhas divididas
print("Pilha 2 (15 cartas): \(pile2)\n")
print("Pilha 3 (15 cartas): \(pile3)\n")
print("Pilha 4 (10 cartas): \(pile4)\n")

print("Inserindo as cartas sorteadas nas pilhas 4, 3 e 2\n")
pile2.insert(sortCard1, at: 0)	// Inserindo as cartas sorteadas no início de cada pilha
print("pilha 2 \(pile2)\n")
pile3.insert(sortCard2, at: 0)
print("pilha 3 \(pile3)\n")
pile4.insert(sortCard3, at: 0)
print("pilha 4 \(pile4)")

print("\nO deck final é:\n")
var deckFinal = (somaPile(pile1: pile1, pile2: pile2, pile3: pile3, pile4: pile4)) // Chamando a função somaPile() para somar as pilhas do baralho dividido
print("\(deckFinal)")

print("Divdindo o baralho em par e impar (descartando as impares): \n")
deckFinal = (separarImpPar(deck: deckFinal))
print("Cartas pares: \n", "\(deckFinal)")

print("Dividindo o baralho em par e impar (descartando as impares): \n")
deckFinal = (separarParImp(deck: deckFinal))
print("Cartas pares: \n", "\(deckFinal)")

print("Dividindo o baralho em par e impar (descartando as pares): \n")
deckFinal = (separarParImp(deck: deckFinal))
print("Cartas impares: \n", "\(deckFinal)")

print("Dividindo o baralho em par e impar (descartando as impares): \n")
deckFinal = (separarImpPar(deck: deckFinal))
print("Cartas sorteadas: \n", "\(deckFinal)")
print("\n======== Fim do truque ========\n")
