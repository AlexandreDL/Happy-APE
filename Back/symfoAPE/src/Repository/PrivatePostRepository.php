<?php

namespace App\Repository;

use App\Entity\PrivatePost;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method PrivatePost|null find($id, $lockMode = null, $lockVersion = null)
 * @method PrivatePost|null findOneBy(array $criteria, array $orderBy = null)
 * @method PrivatePost[]    findAll()
 * @method PrivatePost[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrivatePostRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, PrivatePost::class);
    }

    // /**
    //  * @return PrivatePost[] Returns an array of PrivatePost objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PrivatePost
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
