-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 12 déc. 2020 à 10:31
-- Version du serveur :  5.7.24
-- Version de PHP : 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `basket`
--

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `pictures` text
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `pictures`) VALUES
(1, 'Iphone SE', 'Argent 64Go', 350, 'Apple-iPhone-argent-SE-64Go.jpg'),
(2, 'Iphone 11', 'Blanc 64 go', 799, 'Apple-iPhone-11-blanc-64Go.jpg'),
(3, 'Iphone 12 Pro Max', 'Argent 512 Go\r\n', 1609, 'Apple-iPhone-12pro-argent-512-Go.jpg'),
(4, 'Samsung Galaxy A4', 'Bleu 64Go', 345.79, 'Samsung-galaxy-A41-bleu-64Go.jpeg'),
(5, 'Samsung galaxy S9', 'Noir 64Go', 255, 'Samsung-galaxy-S9-noir-64Go.jpg'),
(6, 'Samsung Galaxy A10', 'Noir 64Go', 149, 'Samsung-galaxy-A10-noir-64Go.jpg'),
(7, 'Huawei P40', 'Bleu 128Go', 465.6, 'Huawei-p40-bleu-128Go.jpg'),
(8, 'Huawei p20', 'Or 128Go', 249.5, 'Huawei-p20-or-128Go.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201130093136-[products].js'),
('20201130093136-create-products.js');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
