import extractSpecialAttacks from './index.js';

describe('extractSpecialAttacks', () => {
  test('должен извлекать атаки с полным описанием', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
      ],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
      },
    ]);
  });

  test('должен подставлять "Описание недоступно", если description отсутствует', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...',
      },
    ]);
  });

  test('должен работать с несколькими атаками и смешанными описаниями', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...',
      },
    ]);
  });

  test('должен возвращать пустой массив, если special пуст', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [],
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([]);
  });

  test('должен возвращать пустой массив, если special отсутствует (значение по умолчанию)', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([]);
  });
});