CREATE DATABASE povo_do_ar;
USE povo_do_ar;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	apelido VARCHAR(50) unique,
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
	-- pode ser apenas um
	fkRaca INT,
	CONSTRAINT cfkRaca
	FOREIGN KEY (fkRaca)
	REFERENCES raca(idRaca)
);

CREATE TABLE bate_papo (
idBatePapo INT PRIMARY KEY AUTO_INCREMENT,
fkPersonagem INT,
FOREIGN KEY (fkPersonagem)
REFERENCES personagem(idPersonagem),
descricao VARCHAR(150),
fk_usuario INT,
FOREIGN KEY (fk_usuario) 
REFERENCES usuario(idUsuario)
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

UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/jude_frostbite_studios.jpg' WHERE idPersonagem = 1;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/cardan_frostbite_studios.jpg' WHERE idPersonagem = 2;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/vivienne_frostbite_studios.jpg' WHERE idPersonagem = 3;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/taryn_frostbite_studios.jpg' WHERE idPersonagem = 4;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/madoc_frostbite_studios.jpg' WHERE idPersonagem = 5;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/locke_frostbite_studios.jpg' WHERE idPersonagem = 6;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/nicasia_frostbite_studios.jpg' WHERE idPersonagem = 7;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/oak_frostbite_studios.jpg' WHERE idPersonagem = 8;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/balekin_frostbite_studios.jpg' WHERE idPersonagem = 9;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/dain_frostbite_studios.jpg' WHERE idPersonagem = 10;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/roach_frostbite_studios.jpg' WHERE idPersonagem = 12;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/bomb_frostbite_studios.jpg' WHERE idPersonagem = 13;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/valerian_frostbite_studios.jpg' WHERE idPersonagem = 14;
UPDATE personagem SET imgPersonagem = '../assets/imgs/personagens/orlagh_frostbite_studios.jpg' WHERE idPersonagem = 15;

INSERT INTO raca (nome, descricao) VALUES
	('Fada', 'Ser mágico manipulador e atraente'),
	('Elfo', 'Elegante, estratégico e imortal'),
	('Duende', 'Astuto e imprevisível'),
	('Humano', 'Frágil, mas extremamente resiliente'),
	('Realeza Feérica', 'Poder, beleza e perigo');
    
    
UPDATE raca SET imgRaca = '../assets/imgs/racas/fada.png' WHERE idRaca = 1;

UPDATE raca SET imgRaca = '../assets/imgs/racas/elfo.png' WHERE idRaca = 2;

UPDATE raca SET imgRaca = '../assets/imgs/racas/boggles.png' WHERE idRaca = 3;

UPDATE raca SET imgRaca = '../assets/imgs/racas/humano.jpg.png' WHERE idRaca = 4;

UPDATE raca SET imgRaca = '../assets/imgs/racas/elfo.jpg.png' WHERE idRaca = 5;
    
  