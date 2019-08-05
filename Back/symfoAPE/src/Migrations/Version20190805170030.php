<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190805170030 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE contact CHANGE lastname lastname VARCHAR(255) DEFAULT NULL, CHANGE firstname firstname VARCHAR(255) DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE event CHANGE author_id author_id INT DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE slug slug VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE medium CHANGE event_id event_id INT DEFAULT NULL, CHANGE news_id news_id INT DEFAULT NULL, CHANGE private_post_id private_post_id INT DEFAULT NULL, CHANGE url url VARCHAR(255) DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE news CHANGE author_id author_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE slug slug VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE private_post CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE role CHANGE role role VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE tag CHANGE title title VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL, CHANGE address_city address_city VARCHAR(255) DEFAULT NULL, CHANGE address_street address_street VARCHAR(255) DEFAULT NULL, CHANGE address_other address_other VARCHAR(255) DEFAULT NULL, CHANGE address_number address_number INT DEFAULT NULL, CHANGE address_zipcode address_zipcode VARCHAR(15) DEFAULT NULL, CHANGE newsletter_subscription newsletter_subscription TINYINT(1) DEFAULT NULL, CHANGE is_active is_active TINYINT(1) DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE contact CHANGE lastname lastname VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE firstname firstname VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE event CHANGE author_id author_id INT DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\', CHANGE slug slug VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE medium CHANGE event_id event_id INT DEFAULT NULL, CHANGE news_id news_id INT DEFAULT NULL, CHANGE private_post_id private_post_id INT DEFAULT NULL, CHANGE url url VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE news CHANGE author_id author_id INT DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\', CHANGE slug slug VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE private_post CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE role CHANGE role role VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE tag CHANGE title title VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT NOT NULL COLLATE utf8mb4_bin, CHANGE address_city address_city VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE address_street address_street VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE address_other address_other VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE address_number address_number INT DEFAULT NULL, CHANGE address_zipcode address_zipcode VARCHAR(15) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE newsletter_subscription newsletter_subscription TINYINT(1) DEFAULT \'NULL\', CHANGE is_active is_active TINYINT(1) DEFAULT \'NULL\', CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
    }
}
