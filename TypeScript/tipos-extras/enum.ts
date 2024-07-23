// enum é uma 'classe' especial que representa um grupo de constantes
// Por padrão, enums inicializará o primeiro valor para 0 e adicionar 1 a cada valor adicional:
enum Planets {
	MERCURIO, // 0
	VENUS, // 1
	TERRA, // 2
	MARTE, // 3
}

// Podemos definir o valor do primeiro enum numérico e tê-lo incremento automático a partir disso:
enum Planets {
	Mercurio = 1,
	Venus, // 2
	Terra, // 3
	Marte, // 4
}

// Podemos atribuir valores de número exclusivos para cada valor enum.
// Em seguida, os valores não serão incrementados automaticamente:
enum StatusCodes {
	NotFound = 404,
	Success = 200,
	Accepted = 202,
	BadRequest = 400,
}

//	Os enums também podem conter strings, Isso é mais comum do que os enums numéricos, devido à sua legibilidade e intenção.
enum CardinalDirections {
	North = 'North',
	East = 'East',
	South = 'South',
	West = 'West',
}
