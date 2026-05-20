CREATE DATABASE povo_do_ar;
USE povo_do_ar;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	apelido VARCHAR(50),
	email VARCHAR(100),
	senha VARCHAR(100)
);

CREATE TABLE personagem (
	idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	descricao VARCHAR(200),
    imgPersonagem VARCHAR(200)
);

CREATE TABLE favorito (
	idFavorito INT PRIMARY KEY AUTO_INCREMENT,

	fkUsuario INT UNIQUE,
	CONSTRAINT fk_usuario_favorito
	FOREIGN KEY (fkUsuario)
	REFERENCES usuario(idUsuario),

	fkPersonagem INT,
	CONSTRAINT fk_personagem_favorito
	FOREIGN KEY (fkPersonagem)
	REFERENCES personagem(idPersonagem)
);

CREATE TABLE raca (
	idRaca INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(60),
	descricao VARCHAR(200),
    imgRaca VARCHAR(200)
);

CREATE TABLE resultado_raca (
	idResultado INT PRIMARY KEY AUTO_INCREMENT,

	-- pode favoritar apenas um
	fkUsuario INT UNIQUE,
	CONSTRAINT cfkUsuario_
	FOREIGN KEY (fkUsuario)
	REFERENCES usuario(idUsuario),

	fkRaca INT,
	CONSTRAINT cfkRaca
	FOREIGN KEY (fkRaca)
	REFERENCES raca(idRaca)
);

-- ------------------------------------------------------------

INSERT INTO personagem (nome, descricao) VALUES
('Jude Duarte', 'Humana ambiciosa, estratégica e determinada a conquistar poder no mundo feérico'),
('Cardan Greenbriar', 'Príncipe cruel, arrogante e cheio de segredos'),
('Vivienne Duarte', 'Fada que rejeita a corte e escolhe viver entre humanos'),
('Taryn Duarte', 'Irmã de Jude, delicada e adaptada às regras do mundo feérico'),
('Madoc', 'General brutal, manipulador e responsável pela criação de Jude'),
('Locke', 'Carismático, manipulador e apaixonado por jogos perigosos'),
('Nicasia', 'Princesa do mar, orgulhosa e poderosa'),
('Oak', 'Príncipe jovem com grande importância para o futuro do reino'),
('Balekin', 'Príncipe cruel e sádico, disposto a tudo pelo poder'),
('Dain', 'Príncipe estratégico e calculista, envolvido em intrigas políticas'),
('Ghost', 'Espião silencioso e leal, mestre da invisibilidade'),
('Roach', 'Espião sarcástico, inteligente e imprevisível'),
('Bomb', 'Especialista em explosivos, leal e determinada'),
('Valerian', 'Nobre cruel que despreza humanos'),
('Orlagh', 'Rainha do Submarino, poderosa e imponente'),
('Asha', 'Rainha anterior, cuja morte mudou o rumo do reino'),
('Liriope', 'Mãe de Cardan, misteriosa e envolta em segredos');

INSERT INTO criatura (nome, descricao) VALUES
	('Fada', 'Ser mágico manipulador e atraente'),
	('Elfo', 'Elegante, estratégico e imortal'),
	('Duende', 'Astuto e imprevisível'),
	('Humano', 'Frágil, mas extremamente resiliente'),
	('Realeza Feérica', 'Poder, beleza e perigo');