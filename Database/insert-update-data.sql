INSERT Hahmot(nimi, animaatio1, animaatio2, animaatio3) 
VALUES ('Noora','Animaatio1 polku','Animaatio2 polku','Animaatio3 polku')
--UPDATE Hahmot SET nimi = 'Nelli' WHERE hahmo_id = 10
SELECT * FROM Hahmot ORDER BY hahmo_id asc

GO

INSERT K‰ytt‰j‰t(etunimi, sukunimi, salasana, s‰hkposti, rekisterˆintikoodi) 
VALUES ('Dan','Andersson','Salasana123','dan.a@yritys.fi', 12345)
--UPDATE K‰ytt‰j‰t SET etunimi = 'Hanna' WHERE k‰ytt‰j‰_id = 5
SELECT * FROM K‰ytt‰j‰t ORDER BY k‰ytt‰j‰_id asc

GO

INSERT Teht‰v‰t(nimi, pistem‰‰r‰, tavoitem‰‰r‰, p‰iv‰m‰‰r‰) 
VALUES ('Soita puheluita',10,15,GETDATE())
--UPDATE Teht‰v‰t SET nimi = 'Tee sopimuksia' WHERE teht‰v‰_id = 10
SELECT * FROM Teht‰v‰t ORDER BY teht‰v‰_id asc

GO

INSERT ValitutTeht‰v‰t(k‰ytt‰j‰_id, teht‰v‰_id, pisteet, viimeinenmuokkaus) 
VALUES (5,10,10,GETDATE())
--UPDATE K‰ytt‰j‰t SET etunimi = 'Hanna' WHERE k‰ytt‰j‰_id = 5
SELECT * FROM ValitutTeht‰v‰t ORDER BY valitutteht_id asc

GO