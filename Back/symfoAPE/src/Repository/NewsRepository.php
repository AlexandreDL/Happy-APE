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

    public function findNextNews()
    {
        $query = $this->createQueryBuilder('n')
            ->leftJoin('n.author', 'u')
            ->leftJoin('n.media', 'm')
            ->addSelect('u', 'm')
            ->where("n.isPublished = 1")
            ->orderBy('n.updatedAt', 'DESC')
            ->setMaxResults(3)
            ;
        return $query->getQuery()->getArrayResult();
    }
}
