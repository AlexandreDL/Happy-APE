<?php

namespace App\Repository;

use App\Entity\Medium;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Medium|null find($id, $lockMode = null, $lockVersion = null)
 * @method Medium|null findOneBy(array $criteria, array $orderBy = null)
 * @method Medium[]    findAll()
 * @method Medium[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediumRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Medium::class);
    }

}
