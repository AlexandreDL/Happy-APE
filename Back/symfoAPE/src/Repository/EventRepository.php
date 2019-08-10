<?php

namespace App\Repository;

use DateTime;
use App\Entity\Event;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Event::class);
    }


    public function findNext3() {
      
        $query = $this->createQueryBuilder('e')
            ->leftJoin('e.author', 'u')
            ->leftJoin('e.media', 'm')
            ->where("e.isPublished = 1")
            ->andWhere('e.date > :now')
            ->orderBy('e.date')
            ->setParameter('now', new \DateTime())
            ->setMaxResults(3)
            ;
        return $query->getQuery()->getArrayResult();
    }
    public function findNext() {
        $query = $this->createQueryBuilder('e')
            ->join('e.author', 'u')
            ->join('e.media', 'm')
            ->where("e.isPublished = 1")
            ->andWhere('e.date > :now')
            ->orderBy('e.date')
            ->setParameter('now', new \DateTime())
            ->setMaxResults(1)
            ;
        return $query->getQuery()->getResult();
    }
    
}
