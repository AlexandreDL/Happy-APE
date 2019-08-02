<?php

namespace App\Controller;

use App\Entity\Medium;
use App\Repository\MediumRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
     * @Route("/media/{id}", name="media_show", methods={"GET"}))
     */
    public function show(medium $medium)
    {
        if (empty($medium)) {
            return new JsonResponse(['message' => 'File not found'], Response::HTTP_NOT_FOUND);
          }
        return $this->json($medium);
    }

     /**
     * @Route("/api/Media/create", name="media_create")
     * @Route("/api/Media/{id}/edit", name="media_edit")
     */
    //TODO

    /**
     * @Route("/api/Media/{id}/delete", name="media_delete")
     */
    public function delete($id) {

        $medium = $this->getDoctrine()->getRepository(Medium::class)->find($id);
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($medium);
        $response = new Response();
        $response->send();

        return $this->json($medium);
      }
}
  