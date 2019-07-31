<?php

namespace App\Controller\Api;

use App\Entity\Medium;
use App\Repository\MediumRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
* @Route("/api", name="api_")
*/
class MediumController extends AbstractController
{
    /**
     * @Route("/media", name="media_list", methods = {"GET"})
     */
    public function list(MediumRepository $mediumRepository)
    {
       $media = $mediumRepository->findAll(); 
       return $this->json($media);
    }   

    /**
     * @Route("/media/{id}", name="media_one", methods={"GET"}))
     */
    public function one(medium $medium)
    {
        if (empty($medium)) {
            return new JsonResponse(['message' => 'File not found'], Response::HTTP_NOT_FOUND);
          }
        return $this->json($medium);
    }
}
  