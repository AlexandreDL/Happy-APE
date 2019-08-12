<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ApiResource(
 *       itemOperations={
 *          "get"={
 *             "access_control"="is_granted('IS_AUTHENTICATED_FULLY')",
 *         }, 
 *          "put"={
 *             "access_control"="is_granted('ROLE_REDACT')"
 *         },
 *           "delete"={
 *             "access_control"="is_granted('ROLE_REDACT')"
 *         }
 *      },
 *      collectionOperations={
 *         "get"={
 *             "access_control"="is_granted('IS_AUTHENTICATED_FULLY')",
 *         }, 
 *          "post"={
 *             "access_control"="is_granted('ROLE_REDACT')"
 *         }
 *      }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\MediumRepository")
 */
class Medium
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message= "Ce champ doit être renseigné.")
     * @Assert\Length(min=5, 
     *      minMessage="Le nom de ce fichier doit compter entre 5 et 50 caractères.",   
     *      max=50, 
     *      maxMessage ="Le nom de ce fichier  doit compter entre 5 et 50 caractères.")
     */
    private $title;

    /**
      * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\File(
     *     maxSize = "1024k",
     *     mimeTypes = {"application/pdf", "image/png", "image/jpg", "image/jpeg", "image/gif"},
     *     mimeTypesMessage = "Veuillez vous assurer que votre fichier soit en pdf, png, jpeg ou gif."
     * )
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank
     * @Assert\Url
     */
    private $url;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\DateTime
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Assert\DateTime
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Event", inversedBy="media", onDelete="SET NULL")
     */
    private $event;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\News", inversedBy="media", onDelete="SET NULL")
     */
    private $news;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PrivatePost", inversedBy="media", onDelete="SET NULL")
     */
    private $privatePost;

    public function __construct()
    {
        $this->createdAt = new \DateTime;
        $this->updatedAt = new \DateTime;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getEvent(): ?Event
    {
        return $this->event;
    }

    public function setEvent(?Event $event): self
    {
        $this->event = $event;

        return $this;
    }

    public function getNews(): ?News
    {
        return $this->news;
    }

    public function setNews(?News $news): self
    {
        $this->news = $news;

        return $this;
    }

    public function getPrivatePost(): ?PrivatePost
    {
        return $this->privatePost;
    }

    public function setPrivatePost(?PrivatePost $privatePost): self
    {
        $this->privatePost = $privatePost;

        return $this;
    }
}
