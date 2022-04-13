export const teams = [
  "Botafogo",
  "Flamengo",
  "Fluminense",
  "Vasco",
]

export const positions = [
  "Zagueiro",
  "Lateral",
  "Meio-Campo",
  "Atacante"
]

export const nivel = [
  "Perna de Pau",
  "Café com Leite",
  "Boleiro",
  "Craque"
]

export function nivelUser(xp: string){
  let pontos = Number(xp);
  if (pontos <= 250){
    return nivel[0]
  }else if(pontos <= 500){
    return nivel[1]
  }else if(pontos <= 750){
    return nivel[2]
  }else{
    return nivel[3]
  }
}
