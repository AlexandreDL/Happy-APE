<?php

namespace App\Controller;

use App\Entity\News;
use App\Repository\NewsRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class NewsController extends AbstractController
{
    /**
     * @Route("/news", name="news_list", methods = {"GET"})
     */
    public function list(NewsRepository $newsRepository)
    {
       $news = $newsRepository->findNext3(); 
       return $this->json($news);
    }

    /**
     * @Route("/news/{id}", name="news_show", methods={"GET"}))
     */
    public function one(News $news)
    {   
        if (empty($news)) {
            return new JsonResponse(['message' => 'News not found'], Response::HTTP_NOT_FOUND);
          }
    
        return $this->json($news);
    }

    /**
     * @Route("/api/news/create", name="news_create")
     * @Route("/api/news/{id}/edit", name="news_edit")
     */
    //TODO

    /**
     * @Route("/api/news/{id}/delete", name="news_delete")
     */
    public function delete($id) {

        $news = $this->getDoctrine()->getRepository(News::class)->find($id);
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($news);
        $response = new Response();
        $response->send();

        return $this->json($news);
      }

}
