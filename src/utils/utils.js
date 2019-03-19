export function NodeImageFromName(name) {
  switch (name) {
    case 'Constructor':
      return '/images/constructor.png';
    case 'Smelter Mk1':
      return '/images/smelter-mk1.png';
    case 'Miner Mk1':
      return '/images/miner-mk1.png';
    case 'Iron Ore':
    default:
      return '/images/iron-ore.png';
  }
}