<?php

namespace App\Repository;

use App\Entity\Event;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

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
            ->orderBy('e.date')
            ->setMaxResults(3)
            ;
        return $query->getQuery()->getArrayResult();
    }
    public function findNext() {
        $query = $this->createQueryBuilder('e')
            ->leftJoin('e.author', 'u')
            ->leftJoin('e.media', 'm')
            ->where("e.isPublished = 1")
            ->orderBy('e.date')
            ->setMaxResults(1)
            ;
        return $query->getQuery()->getResult();
    }
    
    // /**
    //  * @return Event[] Returns an array of Event objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Event
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
