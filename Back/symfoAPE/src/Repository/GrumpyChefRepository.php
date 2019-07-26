<?php

namespace App\Repository;

use App\Entity\GrumpyChef;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method GrumpyChef|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrumpyChef|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrumpyChef[]    findAll()
 * @method GrumpyChef[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrumpyChefRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, GrumpyChef::class);
    }

    // /**
    //  * @return GrumpyChef[] Returns an array of GrumpyChef objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GrumpyChef
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
