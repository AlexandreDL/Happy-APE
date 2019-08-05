<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190805082059 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE news_tag');
        $this->addSql('ALTER TABLE contact CHANGE lastname lastname VARCHAR(255) DEFAULT NULL, CHANGE firstname firstname VARCHAR(255) DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE messsage message LONGTEXT NOT NULL');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA7F675F31B');
        $this->addSql('DROP INDEX IDX_3BAE0AA7F675F31B ON event');
        $this->addSql('ALTER TABLE event DROP author_id, CHANGE name name VARCHAR(255) DEFAULT NULL, CHANGE date date DATETIME DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE is_published is_published TINYINT(1) DEFAULT NULL, CHANGE content content LONGTEXT DEFAULT NULL, CHANGE slug slug VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE medium DROP FOREIGN KEY FK_C67345B771F7E88B');
        $this->addSql('ALTER TABLE medium DROP FOREIGN KEY FK_C67345B7B5A459A0');
        $this->addSql('ALTER TABLE medium DROP FOREIGN KEY FK_C67345B7BA70CFC8');
        $this->addSql('DROP INDEX IDX_C67345B7B5A459A0 ON medium');
        $this->addSql('DROP INDEX IDX_C67345B7BA70CFC8 ON medium');
        $this->addSql('DROP INDEX IDX_C67345B771F7E88B ON medium');
        $this->addSql('ALTER TABLE medium DROP news_id, DROP event_id, DROP private_post_id, CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE type type VARCHAR(255) DEFAULT NULL, CHANGE url url VARCHAR(255) DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE news DROP FOREIGN KEY FK_1DD39950A76ED395');
        $this->addSql('DROP INDEX IDX_1DD39950A76ED395 ON news');
        $this->addSql('ALTER TABLE news DROP user_id, CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE content content LONGTEXT DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE is_published is_published TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE page CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE content content LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE private_post CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE content content LONGTEXT DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE role CHANGE role role VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE tag CHANGE title title VARCHAR(255) DEFAULT NULL');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74 ON user');
        $this->addSql('ALTER TABLE user ADD username VARCHAR(255) DEFAULT NULL, ADD address_zip_code VARCHAR(255) DEFAULT NULL, ADD news_letter_subscription TINYINT(1) DEFAULT NULL, DROP roles, DROP address_zipcode, DROP newsletter_subscription, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE lastname lastname VARCHAR(255) DEFAULT NULL, CHANGE firstname firstname VARCHAR(255) DEFAULT NULL, CHANGE address_street address_street VARCHAR(255) DEFAULT NULL, CHANGE address_other address_other VARCHAR(255) DEFAULT NULL, CHANGE address_number address_number INT DEFAULT NULL, CHANGE is_active is_active TINYINT(1) DEFAULT NULL, CHANGE is_parent is_parent TINYINT(1) DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE address_city address_city VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE news_tag (news_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_BE3ED8A1BAD26311 (tag_id), INDEX IDX_BE3ED8A1B5A459A0 (news_id), PRIMARY KEY(news_id, tag_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE news_tag ADD CONSTRAINT FK_BE3ED8A1B5A459A0 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE news_tag ADD CONSTRAINT FK_BE3ED8A1BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contact CHANGE lastname lastname VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE firstname firstname VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE email email VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE message messsage LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE event ADD author_id INT DEFAULT NULL, CHANGE name name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE date date DATETIME NOT NULL, CHANGE created_at created_at DATETIME NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\', CHANGE is_published is_published TINYINT(1) NOT NULL, CHANGE content content LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE slug slug VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7F675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_3BAE0AA7F675F31B ON event (author_id)');
        $this->addSql('ALTER TABLE medium ADD news_id INT DEFAULT NULL, ADD event_id INT DEFAULT NULL, ADD private_post_id INT DEFAULT NULL, CHANGE title title VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE type type VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE url url VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE created_at created_at DATETIME NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE medium ADD CONSTRAINT FK_C67345B771F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE medium ADD CONSTRAINT FK_C67345B7B5A459A0 FOREIGN KEY (news_id) REFERENCES news (id)');
        $this->addSql('ALTER TABLE medium ADD CONSTRAINT FK_C67345B7BA70CFC8 FOREIGN KEY (private_post_id) REFERENCES private_post (id)');
        $this->addSql('CREATE INDEX IDX_C67345B7B5A459A0 ON medium (news_id)');
        $this->addSql('CREATE INDEX IDX_C67345B7BA70CFC8 ON medium (private_post_id)');
        $this->addSql('CREATE INDEX IDX_C67345B771F7E88B ON medium (event_id)');
        $this->addSql('ALTER TABLE news ADD user_id INT DEFAULT NULL, CHANGE title title VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE content content LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE created_at created_at DATETIME NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\', CHANGE is_published is_published TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE news ADD CONSTRAINT FK_1DD39950A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_1DD39950A76ED395 ON news (user_id)');
        $this->addSql('ALTER TABLE page CHANGE title title VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE content content LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE private_post CHANGE title title VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE content content LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE created_at created_at DATETIME NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE role CHANGE role role VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE tag CHANGE title title VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE user ADD roles LONGTEXT NOT NULL COLLATE utf8mb4_bin, ADD address_zipcode VARCHAR(15) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, ADD newsletter_subscription TINYINT(1) DEFAULT \'NULL\', DROP username, DROP address_zip_code, DROP news_letter_subscription, CHANGE email email VARCHAR(180) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE password password VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE lastname lastname VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE firstname firstname VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE address_street address_street VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE address_other address_other VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE address_number address_number INT DEFAULT NULL, CHANGE is_active is_active TINYINT(1) DEFAULT \'NULL\', CHANGE is_parent is_parent TINYINT(1) DEFAULT \'NULL\', CHANGE created_at created_at DATETIME NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\', CHANGE address_city address_city VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }
}
