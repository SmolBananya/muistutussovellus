CREATE TABLE Hahmot(
hahmo_id int IDENTITY (10,1) NOT NULL,
nimi nvarchar (30) NOT NULL,
animaatio1 nvarchar(100),
animaatio2 nvarchar(100),
animaatio3 nvarchar(100),
PRIMARY KEY (hahmo_id),
)

GO

CREATE TABLE K‰ytt‰j‰t(
k‰ytt‰j‰_id int IDENTITY (5,1) NOT NULL,
hahmo_id int NOT NULL,
etunimi nvarchar (30) NOT NULL,
sukunimi nvarchar(30) NOT NULL,
salasana nvarchar(30) NOT NULL,
s‰hkposti nvarchar(50) NOT NULL,
rekisterˆintikoodi int NOT NULL,
uusip‰iv‰ BIT,
yritys nvarchar(100),
admin BIT,
PRIMARY KEY (k‰ytt‰j‰_id),
FOREIGN KEY (hahmo_id) REFERENCES Hahmot(hahmo_id)
)

GO

CREATE TABLE Teht‰v‰t(
teht‰v‰_id int IDENTITY (10,1) NOT NULL,
nimi nvarchar (30) NOT NULL,
pistem‰‰r‰ int,
tavoitem‰‰r‰ int,
p‰iv‰m‰‰r‰ DATE,
pakollinen BIT,
PRIMARY KEY (teht‰v‰_id)
)

GO

CREATE TABLE ValitutTeht‰v‰t(
valitutteht_id int IDENTITY (10,1) NOT NULL,
k‰ytt‰j‰_id int NOT NULL,
teht‰v‰_id int NOT NULL,
pisteet int,
viimeinenmuokkaus DATE,
PRIMARY KEY (valitutteht_id),
FOREIGN KEY (k‰ytt‰j‰_id) REFERENCES K‰ytt‰j‰t(k‰ytt‰j‰_id),
FOREIGN KEY (teht‰v‰_id) REFERENCES Teht‰v‰t(teht‰v‰_id)
)

GO

-- DROP TABLE ValitutTeht‰v‰t

