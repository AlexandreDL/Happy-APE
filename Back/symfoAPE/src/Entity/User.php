<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adress_city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address_city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address_street;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address_other;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address_number;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address_zipcode;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $newsletter_subscription;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_active;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_parent;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Child", mappedBy="parents")
     */
    private $children;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Event", mappedBy="author")
     */
    private $events_published;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Event", mappedBy="participants")
     */
    private $events_participation;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="users")
     * @ORM\JoinColumn(nullable=false)
     */
    private $role;

    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->events_published = new ArrayCollection();
        $this->events_participation = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getAdressCity(): ?string
    {
        return $this->adress_city;
    }

    public function setAdressCity(?string $adress_city): self
    {
        $this->adress_city = $adress_city;

        return $this;
    }

    public function getAddressCity(): ?string
    {
        return $this->address_city;
    }

    public function setAddressCity(?string $address_city): self
    {
        $this->address_city = $address_city;

        return $this;
    }

    public function getAddressStreet(): ?string
    {
        return $this->address_street;
    }

    public function setAddressStreet(?string $address_street): self
    {
        $this->address_street = $address_street;

        return $this;
    }

    public function getAddressOther(): ?string
    {
        return $this->address_other;
    }

    public function setAddressOther(?string $address_other): self
    {
        $this->address_other = $address_other;

        return $this;
    }

    public function getAddressNumber(): ?string
    {
        return $this->address_number;
    }

    public function setAddressNumber(?string $address_number): self
    {
        $this->address_number = $address_number;

        return $this;
    }

    public function getAddressZipcode(): ?string
    {
        return $this->address_zipcode;
    }

    public function setAddressZipcode(?string $address_zipcode): self
    {
        $this->address_zipcode = $address_zipcode;

        return $this;
    }

    public function getNewsletterSubscription(): ?bool
    {
        return $this->newsletter_subscription;
    }

    public function setNewsletterSubscription(?bool $newsletter_subscription): self
    {
        $this->newsletter_subscription = $newsletter_subscription;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): self
    {
        $this->is_active = $is_active;

        return $this;
    }

    public function getIsParent(): ?bool
    {
        return $this->is_parent;
    }

    public function setIsParent(bool $is_parent): self
    {
        $this->is_parent = $is_parent;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
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

    /**
     * @return Collection|Child[]
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }

    public function addChild(Child $child): self
    {
        if (!$this->children->contains($child)) {
            $this->children[] = $child;
            $child->addParent($this);
        }

        return $this;
    }

    public function removeChild(Child $child): self
    {
        if ($this->children->contains($child)) {
            $this->children->removeElement($child);
            $child->removeParent($this);
        }

        return $this;
    }

    /**
     * @return Collection|Event[]
     */
    public function getEventsPublished(): Collection
    {
        return $this->events_published;
    }

    public function addEventsPublished(Event $eventsPublished): self
    {
        if (!$this->events_published->contains($eventsPublished)) {
            $this->events_published[] = $eventsPublished;
            $eventsPublished->setAuthor($this);
        }

        return $this;
    }

    public function removeEventsPublished(Event $eventsPublished): self
    {
        if ($this->events_published->contains($eventsPublished)) {
            $this->events_published->removeElement($eventsPublished);
            // set the owning side to null (unless already changed)
            if ($eventsPublished->getAuthor() === $this) {
                $eventsPublished->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Event[]
     */
    public function getEventsParticipation(): Collection
    {
        return $this->events_participation;
    }

    public function addEventsParticipation(Event $eventsParticipation): self
    {
        if (!$this->events_participation->contains($eventsParticipation)) {
            $this->events_participation[] = $eventsParticipation;
            $eventsParticipation->addParticipant($this);
        }

        return $this;
    }

    public function removeEventsParticipation(Event $eventsParticipation): self
    {
        if ($this->events_participation->contains($eventsParticipation)) {
            $this->events_participation->removeElement($eventsParticipation);
            $eventsParticipation->removeParticipant($this);
        }

        return $this;
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): self
    {
        $this->role = $role;

        return $this;
    }
}
