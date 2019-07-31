<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Child;
use App\Repository\ChildRepository;

/**
 * @Route("/api", name="api_")
 */
class ChildController extends AbstractController
{
    /**
     * @Route("/children", name="childrend_list")
     */
    public function list(ChildRepository $childRepository)
    {
        $children = $childRepository->findChildren();
        return $this->json($children);
    }
}
