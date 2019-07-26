<?php

namespace App\Controller\Api;

use App\Entity\Media;
use App\Repository\MediaRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
* @Route("/api", name="api_")
*/
class MediaController extends AbstractController
{
    /**
     * @Route("/medias", name="media_list", methods = {"GET"})
     */
    public function list(MediaRepository $mediaRepository)
    {
       $medias = $mediaRepository->findAll(); 
       return $this->json($medias);
    }   

    /**
     * @Route("/media/{id}", name="media_one", methods={"GET"}))
     */
    public function one(media $media)
    {
        if (empty($media)) {
            return new JsonResponse(['message' => 'File not found'], Response::HTTP_NOT_FOUND);
          }
        return $this->json($media);
    }

}
  