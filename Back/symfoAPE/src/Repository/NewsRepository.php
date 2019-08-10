<?php

namespace App\Repository;

use App\Entity\News;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method News|null find($id, $lockMode = null, $lockVersion = null)
 * @method News|null findOneBy(array $criteria, array $orderBy = null)
 * @method News[]    findAll()
 * @method News[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, News::class);
    }

    public function findNext($max_results = 1, $as_array = false)
    {
        $query = $this->createQueryBuilder('n')
            ->leftJoin('n.author', 'u')
            ->leftJoin('n.media', 'm')
            //->leftJoin('n.tags', 't') !!!!!!!!!!!!!!!!!!!!!!!!! BUG TO FIXE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            ->addSelect('u', 'm')
            ->where("n.isPublished = 1")
            ->orderBy('n.createdAt', 'DESC')
            ->setMaxResults($max_results)
            ;
        if(empty($as_array)){
            return $query->getQuery()->getResult();
        }else{
            return $query->getQuery()->getArrayResult();
        }
    }

    // /**
    //  * @return News[] Returns an array of News objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?News
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
