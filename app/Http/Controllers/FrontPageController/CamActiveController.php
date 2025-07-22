<?php

namespace App\Http\Controllers\FrontPageController;

use App\Helpers\FileHelper;
use App\Http\Controllers\Controller;
use App\Mail\CareerSubmissionMail;
use App\Mail\SubmitMessageMail;
use App\Models\Career;
use App\Models\CareerSubmit;
use App\Models\Heading;
use App\Models\Message;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CamActiveController extends Controller
{
    public function index()
    {
        $hero = Page::where('code', 'HOME')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $products = Page::where('code', 'PRODUCTS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $whyWorkWithUs = Page::where('code', 'WHY-WORK-WITH-US')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $whoWeWorkWith = Page::where('code', 'WHO-WE-WORK-WITH')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $latest_resources = Post::with('images')
            ->where('status', 'active')
            ->orderBy('id', 'desc')
            ->limit(3)
            ->get();
        // return $products;

        return Inertia::render('cam-active-two/Index', [
            'hero' => $hero,
            'products' => $products,
            'whyWorkWithUs' => $whyWorkWithUs,
            'whoWeWorkWith' => $whoWeWorkWith,
            'latest_resources' => $latest_resources,
        ]);
    }
    public function products()
    {
        $products = Page::where('code', 'PRODUCTS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $heading1 = Heading::where('code', 'TAILORED-SOLUTIONS')
            ->where('status', 'active')
            ->first();
        // return $products;

        return Inertia::render('cam-active-two/products/Index', [
            'products' => $products,
            'heading1' => $heading1,
        ]);
    }
    public function products_show(Page $product)
    {
        $relate_items = Page::where('parent_id', $product->parent_id)
            ->with('images')
            ->where('status', 'active')
            ->where('id', '!=', $product->id)
            ->orderBy('order_index')
            ->get();

        // return $relate_items;

        return Inertia::render('cam-active-two/products/Show', [
            'relate_items' => $relate_items,
            'item_show' => $product->load('parent'),
        ]);
    }
    public function impact()
    {
        $impact = Page::where('code', 'IMPACT')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $byNumbers = Page::where('code', 'BY-THE-NUMBERS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $storiesFromTheField = Page::where('code', 'STORIES-FROM-THE-FIELD')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $voicesImpact = Page::where('code', 'VOICES-OF-IMPACT')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        // return $impact;

        $heading1 = Heading::where('code', 'WHATS-NEXT')
            ->where('status', 'active')
            ->first();

        return Inertia::render('cam-active-two/impacts/Index', [
            'impact' => $impact,
            'byNumbers' => $byNumbers,
            'storiesFromTheField' => $storiesFromTheField,
            'voicesImpact' => $voicesImpact,
            'heading1' => $heading1,
        ]);
    }

    public function impact_show(Page $impact)
    {
        $relate_items = Page::where('parent_id', $impact->parent_id)
            ->with('images')
            ->where('status', 'active')
            ->where('id', '!=', $impact->id)
            ->orderBy('order_index')
            ->get();

        // return $relate_items;

        return Inertia::render('cam-active-two/impacts/Show', [
            'relate_items' => $relate_items,
            'item_show' => $impact->load('parent'),
        ]);
    }
    public function why_partner_with_us_show(Page $page)
    {
        $relate_items = Page::where('parent_id', $page->parent_id)
            ->with('images')
            ->where('status', 'active')
            ->where('id', '!=', $page->id)
            ->orderBy('order_index')
            ->get();

        // return $relate_items;

        return Inertia::render('cam-active-two/WhyPartnerWithUsShow', [
            'relate_items' => $relate_items,
            'item_show' => $page->load('parent'),
        ]);
    }

    public function careers()
    {
        $career = Page::where('code', 'CAREERS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $whyWorkWithUs = Page::where('code', 'WHY-WORK-WITH-US?')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $heading1 = Heading::where('code', 'INTERNSHIPS-&-VOLUNTEERING')
            ->where('status', 'active')
            ->first();

        $opportunities = Career::where('status', 'active')
            ->orderBy('id', 'desc')
            ->get();
        // return $opportunities;
        return Inertia::render('cam-active-two/Careers', [
            'career' => $career,
            'whyWorkWithUs' => $whyWorkWithUs,
            'heading1' => $heading1,
            'opportunities' => $opportunities,
        ]);
    }
    public function resources()
    {
        $heading1 = Heading::where('code', 'CONTRIBUTE-OR-COLLABORATE')
            ->where('status', 'active')
            ->first();

        $categories_with_posts = PostCategory::with(['posts' => function ($subQuery) {
            $subQuery->with('images')->where('status', 'active')->orderBy('id', 'desc')->limit(3);
        }])->where('CODE', '!=', 'MEDIAS')->where('status', 'active')->orderBy('order_index')->get();

        $medias = PostCategory::with(['posts' => function ($subQuery) {
            $subQuery->with('images')->where('status', 'active')->orderBy('id', 'desc')->limit(10);
        }])->where('CODE', '=', 'MEDIAS')->where('status', 'active')->orderBy('order_index')->first();

        $post_categories = PostCategory::where('status', 'active')->orderBy('order_index')->get();

        // return $medias;
        return Inertia::render('cam-active-two/resources/Index', [
            'heading1' => $heading1,
            'categories_with_posts' => $categories_with_posts,
            'medias' => $medias,
            'post_categories' => $post_categories,
        ]);
    }
    public function search_resources(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');
        $category_code = $request->input('category_code');

        $query = Post::query();

        $query->with('created_by', 'updated_by', 'images', 'category', 'source_detail');

        if ($status) {
            $query->where('status', $status);
        }
        if ($category_code) {
            $query->where('category_code', $category_code);
        }
        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->paginate(perPage: 7)->onEachSide(1);

        $allCategories = PostCategory::where('status', 'active')->orderBy('order_index')->get();

        return Inertia::render('cam-active-two/resources/Search-Resources', [
            'tableData' => $tableData,
            'allCategories' => $allCategories,
        ]);
    }
    public function resources_show(Post $post)
    {
        $relate_items = Post::where('category_code', $post->category_code)
            ->with('images')
            ->where('status', 'active')
            ->where('id', '!=', $post->id)
            ->get();
        $post_categories = PostCategory::where('status', 'active')->orderBy('order_index')->get();

        // return $relate_items;

        return Inertia::render('cam-active-two/resources/Show', [
            'relate_items' => $relate_items,
            'post_categories' => $post_categories,
            'item_show' => $post->load('images'),
        ]);
    }
    public function about()
    {
        $about = Page::where('code', 'ABOUT-US')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourMission = Page::where('code', 'OUR-MISSION')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourVision = Page::where('code', 'OUR-VISION')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourApproach = Page::where('code', 'OUR-APPROACH')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $ourStory = Page::where('code', 'OUR-STORY')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $teams = Team::where('status', 'active')
            ->orderBy('order_index')
            ->get();

        // return $team;

        return Inertia::render('cam-active-two/About', [
            'about' => $about,
            'ourMission' => $ourMission,
            'ourVision' => $ourVision,
            'ourApproach' => $ourApproach,
            'ourStory' => $ourStory,
            'teams' => $teams,
        ]);
    }
    public function contact()
    {
        $contact = Page::where('code', 'CONTACT-US')
            ->with(['images', 'children' => function ($subq) {
                $subq->with('images')->orderBy('order_index');
            }])
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        return Inertia::render('cam-active-two/Contact', [
            'contact' => $contact,
        ]);
    }

    public function submit_message(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:500',
        ]);

        try {
            $to = config('app.MAIL_SALES_TEAM');
            // dd($to);
            Mail::to($to)->send(new SubmitMessageMail($data));

            // If no exception was thrown, consider it sent
            Message::create($data);

            return redirect()->back()->with('success', 'Submit Successfully!');
        } catch (\Exception $e) {
            // Log the error for debugging
            // \Log::error('Support request failed: ' . $e->getMessage());
            // dd($e);
            return redirect()->back()->with('error', 'Failed to submit. Please contact support directly.');
        }
    }

    public function submit_career(Request $request)
    {
        // return ($request->all());

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'message' => 'nullable|string|max:500',
            'career_id' => 'nullable|exists:careers,id',
            'cv' => 'required|file|mimes:pdf,doc,docx|max:20480',
        ]);

        try {
            DB::transaction(function () use ($data, $request) {
                // Create DB record first

                // Handle file upload if exists
                if ($request->hasFile('cv')) {
                    $created_file_name = FileHelper::uploadFile(
                        $request->file('cv'),
                        'assets/files/careers',
                        true,
                    );
                    $data['cv_file'] = $created_file_name;
                    unset($data['cv']);
                    $file_path = public_path('/assets/files/careers/' . $created_file_name);
                } else {
                    $file_path = null;
                }


                $created_message = CareerSubmit::create($data);

                // dd($created_message);
                $to = config('app.MAIL_HR_TEAM');
                Mail::to($to)->send(new CareerSubmissionMail($created_message->load('career'), $file_path));
            });

            return redirect()->back()->with('success', 'Submit Successfully!');
        } catch (\Exception $e) {
            // dd($e);

            // Log::error('Career submission failed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Failed to submit. Please contact support directly.');
        }
    }
}
