/**
 * Извлекает массив спец. атак из объекта персонажа.
 * Для каждой атаки возвращает объект с полями:
 * id, name, description, icon.
 * Если description отсутствует, подставляется 'Описание недоступно'.
 *
 * @param {Object} character - объект персонажа
 * @param {Array} character.special - массив спец. атак
 * @returns {Array<{id: number, name: string, description: string, icon: string}>}
 */
export default function extractSpecialAttacks({ special = [] }) {
  return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
    id,
    name,
    description,
    icon,
  }));
}