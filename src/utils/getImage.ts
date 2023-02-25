export function getImage(name: string, color: string) {
  return `https://api.dicebear.com/5.x/adventurer/png?seed=${name}&backgroundColor=${color}`;
}
