function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {}

// Chamando a função com um objeto que possui tanto o piloto quanto o copiloto
sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' });

// Chamando a função com um objeto que possui apenas o piloto
sendSpaceship({ pilot: 'Han Solo' });

/**
 * Tipagem opcional em TypeScript:
 * - O símbolo `?` após o nome de uma propriedade indica que ela é opcional.
 * - No exemplo acima, `copilot` é uma propriedade opcional.
 * - Isso significa que ao criar um objeto do tipo especificado, você pode ou não incluir essa propriedade.
 * - Caso a propriedade seja fornecida, ela deve seguir o tipo especificado (no caso, uma string).
 * - Caso a propriedade não seja fornecida, o TypeScript não gerará um erro.
 * - A tipagem opcional é útil para representar propriedades que nem sempre estão presentes em um objeto.
 */
